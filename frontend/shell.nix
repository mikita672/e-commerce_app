{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_latest
  ];

  shellHook = ''
    echo "Frontend dev environment loaded!"
  '';
}
